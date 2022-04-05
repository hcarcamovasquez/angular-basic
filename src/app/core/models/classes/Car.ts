import {ICars} from "../interfeces/ICars";

export class Car implements ICars{
  id: string;
  brand?: string;
  color?: string;
  model ?: string
  year?: number


  constructor(id: string,
              brand?: string,
              color?: string,
              model?: string,
              year?: number
  ) {
    this.id = id;
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.year = year;
  }
}
