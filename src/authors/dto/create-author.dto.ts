/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString, } from "class-validator";

export class CreateAuthorDto {
    @IsOptional()
    id?: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    created_at: string;

    @IsOptional()
    updated_at?: string;
}


export const authors: CreateAuthorDto[] = [
    {
        id: 1,
        name: "George Orwell",
        country: "United Kingdom",
        created_at: "2025-01-10T09:30:00Z",
        updated_at: "2025-05-01T14:45:00Z"
    },
    {
        id: 2,
        name: "Haruki Murakami",
        country: "Japan",
        created_at: "2025-02-12T11:20:00Z",
        updated_at: "2025-06-15T18:30:00Z"
    },
    {
        id: 3,
        name: "Jane Austen",
        country: "United Kingdom",
        created_at: "2025-01-22T10:00:00Z",
        updated_at: "2025-03-25T16:10:00Z"
    },
    {
        id: 4,
        name: "Gabriel García Márquez",
        country: "Colombia",
        created_at: "2025-03-05T08:45:00Z",
        updated_at: "2025-04-18T12:50:00Z"
    },
    {
        id: 5,
        name: "Mark Twain",
        country: "United States",
        created_at: "2025-01-15T07:15:00Z",
        updated_at: "2025-05-20T11:25:00Z"
    },
    {
        id: 6,
        name: "Leo Tolstoy",
        country: "Russia",
        created_at: "2025-02-10T13:00:00Z",
        updated_at: "2025-07-03T09:00:00Z"
    },
    {
        id: 7,
        name: "Chinua Achebe",
        country: "Nigeria",
        created_at: "2025-03-18T10:30:00Z",
        updated_at: "2025-06-08T13:40:00Z"
    },
    {
        id: 8,
        name: "Isabel Allende",
        country: "Chile",
        created_at: "2025-04-02T09:10:00Z",
        updated_at: "2025-05-22T10:55:00Z"
    },
    {
        id: 9,
        name: "Ernest Hemingway",
        country: "United States",
        created_at: "2025-01-28T11:40:00Z",
        updated_at: "2025-04-11T12:00:00Z"
    },
    {
        id: 10,
        name: "Khaled Hosseini",
        country: "Afghanistan",
        created_at: "2025-02-25T08:25:00Z",
        updated_at: "2025-06-01T17:15:00Z"
    }
];

