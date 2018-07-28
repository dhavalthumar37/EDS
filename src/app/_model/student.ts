export interface Student {
    Id: number;
    name?: string;
    firstName: string;
    lastName?: string;
    email?: string;
    height?: number;
    weight?: number;
    dob?: string;
    testResults?: TestDetail[];
}

export interface TestDetail {
    testId: number;
    takenOn: string;
    marks: number;
}
