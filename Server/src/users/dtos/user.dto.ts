import { Expose } from "class-transformer";

// defines a default way to show a User to the outside world(RESPONSE)
export class UserDto {
    // @Expose() -> implies do share the property
    @Expose()
    id: number;

    @Expose()
    email: string;

    @Expose()
    name: string;
}