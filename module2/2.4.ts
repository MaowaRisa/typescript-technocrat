{
    //interface - generic
    interface Developer<T, Y=null>{
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T,
        bike? : Y
    }
    interface EmilabWatch {
        brand: string;
        model: string;
        display: string;
    }
    const poorDeveloper : Developer<EmilabWatch> = {
        name: 'Risa',
        computer: {
            brand: 'Mac',
            model: 'M1',
            releaseYear: 2022
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED'
        }
    }
    interface AppleWatch{
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }
    interface YamahaBike{
        name: string;
        engineCapacity: string
    }
    const richDeveloper : Developer<AppleWatch, YamahaBike> = {
        name: 'Rich',
        computer: {
            brand: 'HP',
            model: 'X-25UR',
            releaseYear: 2024
        },
        smartWatch: {
            brand: 'Apple Watch',
            model: 'Something-2024',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            name: 'Yamaha',
            engineCapacity: '100cc'
        }
    }
    //

}