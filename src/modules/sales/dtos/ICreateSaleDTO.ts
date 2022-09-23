export interface ICreateSaleDTO {
  course_name: string;
  description: string;
  seller: string;
  value: number;
  retained_value: number;
  date_sale: Date;
  id?: string;
}
