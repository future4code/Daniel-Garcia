import { Category, CategoryDTO } from "../model/categoryModel";
import { BaseDatabase } from "./baseDatabase";

export class CategoryDatabase extends BaseDatabase {
  static TABLE_NAME = "category";

  async create(data: CategoryDTO) {
    try {
      await this.getConnection()
        .insert({
          NAME: data.name,
        })
        .into(CategoryDatabase.TABLE_NAME);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async getAll(): Promise<Category[]> {
    let result;
    try {
      result = await this.getConnection()
        .select("*")
        .from(CategoryDatabase.TABLE_NAME);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    } finally {
      if (result instanceof Array) {
        return result.map((category: any) => {
          return Category.toCategoryModel(category);
        });
      }
      return [];
    }
  }

  async searchByName(data: CategoryDTO): Promise<Category> {
    const NAME = data.name;
    let result: any;
    try {
      result = await this.getConnection()
        .select("*")
        .from(CategoryDatabase.TABLE_NAME)
        .where({ NAME });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    } finally {
      return Category.toCategoryModel(result[0]);
    }
  }
  async deleteByName(data: CategoryDTO) {
    const NAME = data.name;
    let result: any;
    try {
      result = await this.getConnection()
        .delete("*")
        .from(CategoryDatabase.TABLE_NAME)
        .where({ NAME });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("FOREIGN KEY")) {
          //TODO-call delete relational table and delete data from it
          throw new Error(
            "First delete Devices that uses that Category, then delete the Category"
          );
        }
        throw new Error(error.message);
      }
    }
  }
}
