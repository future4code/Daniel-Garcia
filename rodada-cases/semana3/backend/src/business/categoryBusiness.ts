import { CategoryDatabase } from "../data/categoryDatabase";
import { Category, CategoryDTO } from "../model/categoryModel";

export class CategoryBusiness {
  constructor(private categoryDatabase: CategoryDatabase) {}

  async create(data: CategoryDTO) {
    if (!data.name) {
      throw new Error("Name must be provided to create a new category");
    }
    const verifiedCategory = await this.categoryDatabase.searchByName(data);

    if (verifiedCategory.getId()) {
      throw new Error("Name already exists");
    }
    await this.categoryDatabase.create(data);
  }
  async getAll(): Promise<Category[]> {
    return this.categoryDatabase.getAll();
  }

  async delete(data: CategoryDTO) {
    if (!data.name) {
      throw new Error("Name must be provided to delete a category");
    }
    await this.categoryDatabase.deleteByName(data);
  }
}
