import { RaceDto, RaceYearGrandPrixRequestDto } from '../dtos';

export interface IRaceService {
  getAllRaces(query: RaceYearGrandPrixRequestDto): Promise<RaceDto[]>;
}
