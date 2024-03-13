interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow any other attribute with any name
}

interface Directors extends Teacher {
    numberOfReports: number;
}
