{
    // Union Types - Or operator
    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

    const newDeveloper : FrontendDeveloper = "fakibazDeveloper";

    type User = {
        name: string;
        email: string;
        gender: "male" | "female";
        bloodGroup: "O+"|"A+"|"B+";
    }
    const user : User = {
        name: "Risa",
        email: "ma@mail.com",
        gender: "female",
        bloodGroup: "B+"
    }
    // Intersection 
    type FrontendEngineer = {
        skills: string[],
        designation1: 'Frontend Developer'
    }
    type BackendEngineer = {
        skills: string[],
        designation2: 'Backend Developer'
    }
    type FullstackDeveloper = FrontendEngineer & BackendEngineer

    const fullStackDeveloper : FullstackDeveloper = {
        skills: ['Html', 'Css', 'Express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }
}