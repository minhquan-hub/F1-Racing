import { DriverCreateDto, DriverDto } from '../../dtos';

export interface IDriverService {
  getAllDrivers(): Promise<DriverDto[]>;
  createDriver(driver: DriverCreateDto): Promise<DriverDto>;
}
