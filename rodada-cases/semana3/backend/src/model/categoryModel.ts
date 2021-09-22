export class Category {
  constructor(private id: number, private name: string) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  static toCategoryModel(category?: any): Category {
    return new Category(category?.ID, category?.NAME);
  }
}
export interface CategoryDTO {
  name: string;
}
