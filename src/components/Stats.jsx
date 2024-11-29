import CountUp from "react-countup";

const stats = [
    {
        num: 1,
        text: "Years of experience",
    },
    {
        num: 10,
        text: "Projects completed",
    },
    {
        num: 5,
        text: "Technologies expert",
    },
    {
        num: 100,
        text: "Code commits",
    },
];

const Stats = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div
                                className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
                                key={index}
                            >
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl lg:text-6xl font-extrabold"
                                    suffix=""
                                />
                                <p
                                    className={`${ 
                                        item.text.length < 15
                                            ? "max-w-[100px]"
                                            : "max-w-[80px]"
                                    }`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Stats;
