import { Expose, Transform } from 'class-transformer';

import { User } from 'src/users/user.entity';

export class ReportDto {
    @Expose()
    id: number;

    @Expose()
    price: number;

    @Expose()
    make: string;

    @Expose()
    model: string;

    @Expose()
    year: number;

    @Expose()
    lng: number;

    @Expose()
    lat: number;

    @Expose()
    mileage: number;

    @Expose()
    approved: boolean;

    
    @Transform(({ obj }) => obj.user.id)
    @Expose()
    userId: number;
}

/**
 * obj -> reference to the original report entity
 */