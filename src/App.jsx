import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

import {
    FaGlobeAsia,
    FaTiktok,
    FaSpotify,
    FaRobot,
    FaYoutube,
    FaFire,
    FaBolt,
} from "react-icons/fa";

const activities = [
    {
        name: "Uses TikTok Daily",
        reaction: "👀 Chronically online detected",
    },
    {
        name: "Uses ChatGPT",
        reaction: "🤖 Assignment helper unlocked",
    },
    {
        name: "Watches Anime",
        reaction: "⚔️ Main character energy",
    },
    {
        name: "Uses Spotify",
        reaction: "🎵 Music addict confirmed",
    },
    {
        name: "Orders Food Online",
        reaction: "🍔 Convenience master",
    },
    {
        name: "Uses Netflix",
        reaction: "📺 Binge watcher unlocked",
    },
    {
        name: "Uses Instagram Reels",
        reaction: "📱 Doom scrolling activated",
    },
    {
        name: "Uses AI Tools",
        reaction: "🚀 Future human detected",
    },
    {
        name: "Plays Online Games",
        reaction: "🎮 Competitive gamer spotted",
    },
    {
        name: "Uses YouTube Daily",
        reaction: "▶️ Algorithm controls your life",
    },
];

const fakeStudents = [
    "Devjan",
    "Dasun",
    "Anjula",
    "Kaushika",
    "Dilshan",
    "Amami",
    "Safiya",
    "Maryam",
    "Harsha",
    "Ravisha",
    "Nimesha",
    "Chanuki",
];

function App() {

    const isAdmin =
        window.location.pathname === "/admin";

    // USER STATES

    const [selected, setSelected] = useState([]);

    const [score, setScore] = useState(0);

    const [achievement, setAchievement] = useState("");

    const [reaction, setReaction] = useState("");

    const [showConfetti, setShowConfetti] = useState(false);

    const [showResult, setShowResult] = useState(false);

    const [loadingResult, setLoadingResult] = useState(false);

    const [personality, setPersonality] = useState("");

    const [username, setUsername] = useState("");

    const [country, setCountry] = useState("");

    const [favoriteApp, setFavoriteApp] = useState("");

    // ADMIN STATES

    const [feed, setFeed] = useState([]);

    const [alert, setAlert] = useState("");

    const [liveCount, setLiveCount] = useState(0);

    const [globalIndex, setGlobalIndex] = useState(0);

    const [aiUsage, setAiUsage] = useState(0);

    const [socialMedia, setSocialMedia] = useState(0);

    const [streaming, setStreaming] = useState(0);

    const [aiHeat, setAiHeat] = useState(0);

    const [winnerReady, setWinnerReady] = useState(false);

    // LEADERBOARD

    const [leaderboard, setLeaderboard] = useState([
        { name: "🥇 Devjan", points: 0 },
        { name: "🥈 Dasun", points: 0 },
        { name: "🥉 Anjula", points: 0 },
        { name: "Kaushika", points: 0 },
        { name: "Dilshan", points: 0 },
        { name: "Amami", points: 0 },
        { name: "Safiya", points: 0 },
        { name: "Maryam", points: 0 },
        { name: "Harsha", points: 0 },
        { name: "Ravisha", points: 0 },
        { name: "Nimesha", points: 0 },
        { name: "Chanuki", points: 0 },
    ]);

    // WINNER TIMER

    useEffect(() => {

        if (!isAdmin) return;

        const timer = setTimeout(() => {

            setWinnerReady(true);

        }, 25000);

        return () => clearTimeout(timer);

    }, [isAdmin]);

    // ADMIN EFFECTS

    useEffect(() => {

        if (!isAdmin) return;

        const connectInterval = setInterval(() => {

            setLiveCount((prev) => {

                if (prev < 25) {
                    return prev + 1;
                }

                return prev;
            });

        }, 700);

        const dashboardInterval = setInterval(() => {

            const randomStudent =
                fakeStudents[
                    Math.floor(Math.random() * fakeStudents.length)
                    ];

            const randomActivity =
                activities[
                    Math.floor(Math.random() * activities.length)
                    ];

            // FEED

            const newFeed =
                `🔥 ${randomStudent} ${randomActivity.name}`;

            setFeed((prev) => [newFeed, ...prev.slice(0, 9)]);

            // ALERTS

            const alerts = [
                "🚨 AI Usage Increased",
                "🔥 TikTok Surge Detected",
                "⚡ Globalization Trend Shift",
                "🌍 Streaming Activity Rising",
            ];

            setAlert(
                alerts[
                    Math.floor(Math.random() * alerts.length)
                    ]
            );

            // STATS

            setGlobalIndex((prev) => {

                if (prev < 97) {
                    return prev + 2;
                }

                return prev;
            });

            setAiUsage((prev) => {

                if (prev < 88) {
                    return prev + 2;
                }

                return prev;
            });

            // HEATMAP

            setSocialMedia((prev) => {

                if (prev < 92) {
                    return prev + 2;
                }

                return prev;
            });

            setStreaming((prev) => {

                if (prev < 80) {
                    return prev + 2;
                }

                return prev;
            });

            setAiHeat((prev) => {

                if (prev < 67) {
                    return prev + 1;
                }

                return prev;
            });

            // LEADERBOARD GROWTH

            setLeaderboard((prev) => {

                let updated = [...prev];

                updated = updated.map((student) => {

                    let growth =
                        Math.floor(Math.random() * 3);

                    // DEVJAN WINS

                    if (student.name.includes("Devjan")) {

                        growth += 2;
                    }

                    let nextPoints =
                        student.points + growth;

                    if (nextPoints > 100) {
                        nextPoints = 100;
                    }

                    return {
                        ...student,
                        points: nextPoints,
                    };
                });

                updated.sort((a, b) => b.points - a.points);

                return updated;
            });

        }, 2000);

        return () => {

            clearInterval(connectInterval);

            clearInterval(dashboardInterval);

        };

    }, [isAdmin]);

    // USER CLICK

    const handleClick = (activity) => {

        setReaction(activity.reaction);

        setTimeout(() => {
            setReaction("");
        }, 2000);

        if (selected.includes(activity.name)) {

            setSelected(
                selected.filter(
                    (item) => item !== activity.name
                )
            );

        } else {

            setSelected([
                ...selected,
                activity.name,
            ]);

        }
    };

    // RESULT

    const calculateResult = () => {

        setLoadingResult(true);

        setTimeout(() => {

            const finalScore =
                selected.length * 10;

            setScore(finalScore);

            if (finalScore >= 90) {

                setAchievement(
                    "⚡ Hyper Connected Human"
                );

                setPersonality(
                    "You live inside global internet culture."
                );

                setShowConfetti(true);

            } else if (finalScore >= 70) {

                setAchievement(
                    "🌍 Global Citizen"
                );

                setPersonality(
                    "You are highly connected worldwide."
                );

            } else if (finalScore >= 50) {

                setAchievement(
                    "🏆 Digital Explorer"
                );

                setPersonality(
                    "You actively follow modern digital trends."
                );

            } else {

                setAchievement(
                    "📱 Local Citizen"
                );

                setPersonality(
                    "You are less influenced by globalization."
                );

            }

            setLoadingResult(false);

            setShowResult(true);

        }, 3000);

    };

    // RESET

    const resetGame = () => {

        setSelected([]);

        setShowResult(false);

        setShowConfetti(false);

    };

    return (

        <div className="
      min-h-screen
      bg-[#020617]
      text-white
      p-6
      overflow-hidden
      bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08),_transparent_70%)]
    ">

            {showConfetti && <Confetti />}

            {/* ALERT */}

            {isAdmin && alert && (

                <motion.div
                    initial={{
                        opacity: 0,
                        y: -40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    className="
            fixed
            top-5
            left-1/2
            -translate-x-1/2
            z-50
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-red-500
            to-orange-500
            font-bold
          "
                >
                    {alert}
                </motion.div>

            )}

            {/* HEADER */}

            <div className="text-center mb-10">

                <h1 className="
          text-6xl
          md:text-7xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          text-transparent
          bg-clip-text
        ">

                    {isAdmin
                        ? "🌍 CLASSROOM GLOBALIZATION COMMAND CENTER"
                        : "🌍 HOW GLOBALIZED ARE YOU?"
                    }

                </h1>

            </div>

            {/* USER MODE */}

            {!isAdmin && (

                <>
                    <div className="
            bg-white/5
            rounded-[40px]
            p-8
            border
            border-white/10
            mb-8
          ">

                        <h2 className="
              text-3xl
              font-bold
              text-cyan-400
              mb-6
            ">
                            🌍 Globalization Survey
                        </h2>

                        <div className="space-y-5">

                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-black/30
                  border
                  border-cyan-400/20
                "
                            />

                            <input
                                type="text"
                                placeholder="Favorite Country"
                                value={country}
                                onChange={(e) =>
                                    setCountry(e.target.value)
                                }
                                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-black/30
                  border
                  border-cyan-400/20
                "
                            />

                            <input
                                type="text"
                                placeholder="Most Used App"
                                value={favoriteApp}
                                onChange={(e) =>
                                    setFavoriteApp(e.target.value)
                                }
                                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-black/30
                  border
                  border-cyan-400/20
                "
                            />

                        </div>

                    </div>

                    {/* ACTIVITIES */}

                    <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            mb-8
          ">

                        {activities.map((activity, index) => (

                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.03
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}
                                onClick={() =>
                                    handleClick(activity)
                                }
                                className={`
                  cursor-pointer
                  rounded-3xl
                  p-6
                  border
                  transition-all
                  duration-500

                  ${
                                    selected.includes(activity.name)
                                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black"
                                        : "bg-white/5 border-white/10"
                                }
                `}
                            >

                                <div className="
                  flex
                  items-center
                  gap-4
                ">

                                    <div className="
                    text-4xl
                    text-cyan-400
                  ">

                                        {index % 5 === 0 && <FaTiktok />}
                                        {index % 5 === 1 && <FaSpotify />}
                                        {index % 5 === 2 && <FaRobot />}
                                        {index % 5 === 3 && <FaYoutube />}
                                        {index % 5 === 4 && <FaGlobeAsia />}

                                    </div>

                                    <h3 className="
                    text-xl
                    font-bold
                  ">
                                        {activity.name}
                                    </h3>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                    <button
                        onClick={calculateResult}
                        disabled={loadingResult}
                        className="
              w-full
              py-5
              rounded-3xl
              text-2xl
              font-black
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              text-black
            "
                    >

                        {loadingResult
                            ? "🌍 ANALYZING..."
                            : "CHECK MY GLOBALIZATION LEVEL 🌍"
                        }

                    </button>

                </>

            )}

            {/* ADMIN MODE */}

            {isAdmin && (

                <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        ">

                    {/* LEFT */}

                    <div className="
            lg:col-span-2
            space-y-8
          ">

                        {/* TOP STATS */}

                        <div className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            ">

                            <div className="
                bg-white/5
                rounded-3xl
                p-6
              ">
                                <h2 className="text-gray-400">
                                    Students Connected
                                </h2>

                                <p className="
                  text-5xl
                  font-bold
                  text-cyan-400
                  mt-3
                ">
                                    {liveCount}
                                </p>
                            </div>

                            <div className="
                bg-white/5
                rounded-3xl
                p-6
              ">
                                <h2 className="text-gray-400">
                                    Globalization Index
                                </h2>

                                <p className="
                  text-5xl
                  font-bold
                  text-green-400
                  mt-3
                ">
                                    {globalIndex}%
                                </p>
                            </div>

                            <div className="
                bg-white/5
                rounded-3xl
                p-6
              ">
                                <h2 className="text-gray-400">
                                    AI Usage
                                </h2>

                                <p className="
                  text-5xl
                  font-bold
                  text-pink-400
                  mt-3
                ">
                                    {aiUsage}%
                                </p>
                            </div>

                        </div>

                        {/* HEATMAP */}

                        <div className="
              bg-white/5
              rounded-[40px]
              p-8
            ">

                            <div className="
                flex
                items-center
                gap-4
                mb-6
              ">

                                <FaFire className="
                  text-4xl
                  text-orange-400
                " />

                                <h2 className="
                  text-3xl
                  font-bold
                ">
                                    Globalization Heatmap
                                </h2>

                            </div>

                            <div className="space-y-6">

                                {[
                                    {
                                        label: "Social Media",
                                        value: socialMedia,
                                        color: "bg-cyan-400"
                                    },
                                    {
                                        label: "Streaming",
                                        value: streaming,
                                        color: "bg-pink-400"
                                    },
                                    {
                                        label: "AI Usage",
                                        value: aiHeat,
                                        color: "bg-yellow-400"
                                    },
                                ].map((item, index) => (

                                    <div key={index}>

                                        <div className="
                      flex
                      justify-between
                      mb-2
                    ">

                                            <p>{item.label}</p>

                                            <p>{item.value}%</p>

                                        </div>

                                        <div className="
                      w-full
                      bg-black/30
                      rounded-full
                      h-5
                    ">

                                            <motion.div
                                                className={`
                          ${item.color}
                          h-5
                          rounded-full
                        `}
                                                animate={{
                                                    width: `${item.value}%`
                                                }}
                                            />

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* FEED */}

                        <div className="
              bg-white/5
              rounded-[40px]
              p-8
            ">

                            <div className="
                flex
                items-center
                gap-4
                mb-6
              ">

                                <FaBolt className="
                  text-4xl
                  text-pink-400
                " />

                                <h2 className="
                  text-3xl
                  font-bold
                  text-pink-400
                ">
                                    Live Classroom Feed
                                </h2>

                            </div>

                            <div className="space-y-4">

                                {feed.map((item, index) => (

                                    <motion.div
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: 20
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        className="
                      bg-white/5
                      rounded-2xl
                      p-4
                    "
                                    >
                                        {item}
                                    </motion.div>

                                ))}

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="space-y-6">

                        {/* WINNER POPUP */}

                        <AnimatePresence>

                            {winnerReady &&
                                leaderboard[0].points >= 100 && (

                                    <motion.div
                                        initial={{
                                            scale: 0.2,
                                            opacity: 0
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1
                                        }}
                                        className="
                    fixed
                    inset-0
                    z-50
                    flex
                    items-center
                    justify-center
                    bg-black/70
                  "
                                    >

                                        <Confetti
                                            recycle={true}
                                            numberOfPieces={500}
                                        />

                                        <motion.div
                                            animate={{
                                                rotate: [0, 2, -2, 0]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1
                                            }}
                                            className="
                      bg-gradient-to-r
                      from-yellow-400
                      to-orange-500
                      text-black
                      p-16
                      rounded-[50px]
                      text-center
                      shadow-[0_0_80px_rgba(255,200,0,0.8)]
                    "
                                        >

                                            <h1 className="
                      text-7xl
                      font-black
                      mb-6
                    ">
                                                🏆 WINNER
                                            </h1>

                                            <h2 className="
                      text-5xl
                      font-black
                      mb-4
                    ">
                                                {leaderboard[0].name}
                                            </h2>

                                            <motion.p
                                                initial={{
                                                    opacity: 0,
                                                    y: 20
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0
                                                }}
                                                transition={{
                                                    delay: 0.5
                                                }}
                                                className="
                        text-3xl
                        font-bold
                        text-black
                      "
                                            >
                                                🌍 MOST GLOBALIZED STUDENT
                                            </motion.p>

                                            <motion.p
                                                initial={{
                                                    opacity: 0
                                                }}
                                                animate={{
                                                    opacity: 1
                                                }}
                                                transition={{
                                                    delay: 1
                                                }}
                                                className="
                        mt-4
                        text-xl
                        font-semibold
                        text-black/80
                      "
                                            >
                                                “Connected beyond borders, powered by global culture.”
                                            </motion.p>

                                        </motion.div>

                                    </motion.div>

                                )}

                        </AnimatePresence>

                        {/* LEADERBOARD */}

                        <div className="
              bg-white/5
              rounded-[40px]
              p-8
            ">

                            <h2 className="
                text-3xl
                font-bold
                text-cyan-400
                mb-6
              ">
                                🏆 Classroom Ranking
                            </h2>

                            <div className="space-y-4">

                                {leaderboard
                                    .slice(
                                        0,
                                        Math.min(
                                            leaderboard.length,
                                            Math.floor(liveCount / 2) + 1
                                        )
                                    )

                                    .map((student, index) => (

                                        <motion.div
                                            key={student.name}
                                            layout

                                            initial={{
                                                opacity: 0,
                                                x: 120,
                                                scale: 0.7
                                            }}

                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                scale: 1
                                            }}

                                            transition={{
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 12
                                            }}

                                            className={`
                        rounded-2xl
                        p-5
                        font-bold
                        overflow-hidden
                        relative

                        ${
                                                index === 0
                                                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black"
                                                    : index === 1
                                                        ? "bg-gradient-to-r from-gray-300 to-gray-500 text-black"
                                                        : index === 2
                                                            ? "bg-gradient-to-r from-orange-700 to-orange-500 text-white"
                                                            : "bg-white/5"
                                            }
                      `}
                                        >

                                            <motion.div
                                                animate={{
                                                    x: ["-100%", "100%"]
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 2,
                                                    ease: "linear"
                                                }}
                                                className="
                          absolute
                          top-0
                          left-0
                          w-1/3
                          h-full
                          bg-white/10
                          blur-xl
                        "
                                            />

                                            <div className="
                        flex
                        justify-between
                        relative
                        z-10
                      ">

                        <span>
                          {index + 1}. {student.name}
                        </span>

                                                <motion.span
                                                    key={student.points}
                                                    initial={{
                                                        scale: 1.3
                                                    }}
                                                    animate={{
                                                        scale: 1
                                                    }}
                                                >
                                                    {student.points}%
                                                </motion.span>

                                            </div>

                                            <div className="
                        mt-4
                        w-full
                        bg-black/20
                        rounded-full
                        h-3
                      ">

                                                <motion.div
                                                    initial={{
                                                        width: 0
                                                    }}
                                                    animate={{
                                                        width: `${student.points}%`
                                                    }}
                                                    transition={{
                                                        duration: 2
                                                    }}
                                                    className={`
                            h-3
                            rounded-full

                            ${
                                                        index === 0
                                                            ? "bg-black"
                                                            : "bg-cyan-400"
                                                    }
                          `}
                                                />

                                            </div>

                                        </motion.div>

                                    ))}

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default App;