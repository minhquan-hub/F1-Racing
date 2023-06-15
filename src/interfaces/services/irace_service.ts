import { RaceDto, RaceYearGrandPrixRequestDto } from '../../dtos';

export interface IRaceService {
  getAllRaces(raceQuery: RaceYearGrandPrixRequestDto): Promise<RaceDto[]>;
  getRacesById(raceId: number): Promise<RaceDto[]>;
}
