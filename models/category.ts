export default class Category {
  id: string;
  name: string;
  color: string;

  constructor(id: string, name: string, color: string) {
    this.id = id;
    this.color = color;
    this.name = name;

    return this;
  }
}
