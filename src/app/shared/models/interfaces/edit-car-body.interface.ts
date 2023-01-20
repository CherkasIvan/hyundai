export interface EditCarBodyInterface {
  body : {
    carId: string,
    VIN: string,
    car_body_type: string,
    car_mark: string,
    car_model: string,
    car_price: string,
    car_telematic: boolean,
    car_telematic_type: string[],
    car_year: string,
    horse_power: string,
    pts_issue_year: string,
    transmission: string,
  };
}