type TCallback = (passes: boolean) => void;

export type TState = {
    // Indicate the tests sttarted
    isRunning: boolean,
    // Number of not started tests
    notStarted: number,
    // Number of passed tests
    passed: number,
    // Number of failes tests
    failed: number,
    tests: TTest[],
}

export type TTest = {
    id: number;
    description: string;
    run: (callback: TCallback) => void;
    passed: null | boolean;
    running: boolean;
};

const makeDummyTest = () => {
    const delay = 7000 + Math.random() * 7000;
    const testPassed = Math.random() > 0.5;

    return (callback: TCallback) => {
        window.setTimeout(() => callback(testPassed), delay);
    };
};

const INIT_TESTS: TTest[] = [
    { id: 1, description: "uploads go in both directions", run: makeDummyTest(), passed: null, running: false },
    { id: 2, description: "PDFs are adequately waterproof", run: makeDummyTest(), passed: null, running: false },
    { id: 3, description: "videos are heated to 12,000,000 Kelvin", run: makeDummyTest(), passed: null, running: false },
    { id: 4, description: "subpixels can go rock climbing", run: makeDummyTest(), passed: null, running: false },
    { id: 5, description: "images are squarer than traffic cones", run: makeDummyTest(), passed: null, running: false },
    { id: 6, description: "metaproperties don't go too meta", run: makeDummyTest(), passed: null, running: false },
];

export const initialState: TState = {
    isRunning: false,
    notStarted: INIT_TESTS.length,
    passed: 0,
    failed: 0,
    tests: INIT_TESTS,
}