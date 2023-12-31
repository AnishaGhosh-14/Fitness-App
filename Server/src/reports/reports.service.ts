import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateReportDto } from './dtos/create-report.dto';
import { Report } from './report.entity';
import { User } from 'src/users/user.entity';
import { GetEstimateDto } from './dtos/get-estimate.dto';

@Injectable()
export class ReportsService {
    constructor(
        @InjectRepository(Report) private repo: Repository<Report>
    ) {}

    create(reportDto: CreateReportDto, user: User) {
        const report = this.repo.create(reportDto);

        // assigning the user associated with the report
        // report.user = user;

        return this.repo.save(report);
    }

    async changeApproval(id: string, approved: boolean) {
        const report = await this.repo.findOne({ where: { id: parseInt(id) }});
        if(!report) {
            throw new NotFoundException('Report Not Found!');
        }
        
        report.approved = approved;
        return this.repo.save(report);
    }

    createEstimate(estimateDto: GetEstimateDto) { // OR ({ make, model, ... }: GetEstimateDto)
        return this.repo.createQueryBuilder()
            .select('AVG(price)', 'price')
            .where('make = :makeVal', { makeVal: estimateDto.make })        // OR ('make = :make', { make })
            .andWhere('model = :modelVal', { modelVal: estimateDto.model })
            .andWhere('lat - :latVal BETWEEN -5 AND +5', { latVal: estimateDto.lat })
            .andWhere('lng - :lngVal BETWEEN -5 AND +5', { lngVal: estimateDto.lng })
            .andWhere('year - :yearVal BETWEEN -3 AND +3', { yearVal: estimateDto.year })
            .andWhere('approved IS TRUE')
            .orderBy('ABS(mileage - :mileage)', 'DESC')
            .setParameters({ mileage: estimateDto.mileage })
            .limit(3)
            .getRawOne()
        
        /**
         * lat - :latVal BETWEEN -5 AND +5 -- implies, the diff b/w lat from table and lat from query should be between -5 and +5 
         * 
         * lat & lng -> +5 or -5 of given data
         * year -> within 3 years of given year
         * mileage -> order by closest mileage
         * 
         * setParameter is used for 'mileage', since orderBy does not take parameter object as 2nd argument
         * 
         * we are the finding average price of the 1st three reports
         */
    }
}
