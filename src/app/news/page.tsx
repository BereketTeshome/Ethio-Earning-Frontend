"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { useSelector } from "react-redux";

const newsData = [
  {
    id: 1,
    title: {
      eng: "Breaking News: Market Shifts",
      am: "አዲስ ዜና: የገበያ ለውጥ",
    },
    description: {
      eng: "A significant shift in the market has been observed over the past few weeks, indicating a major trend with a significant shift in the market has been observed over the past few weeks, indicating a major trend",
      am: "ባለፉት ጥቂት ሳምንታት ውስጥ በገበያው ላይ ከፍተኛ ለውጥ ታይቷል, ይህም ባለፉት ጥቂት ሳምንታት ውስጥ በገበያው ላይ ከፍተኛ ለውጥ ያለው ትልቅ አዝማሚያ ታይቷል, ይህም ትልቅ አዝማሚያ ያሳያል",
    },
    postedDate: "2024-09-10",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTer88iO3qFLyVqhzeQMmjjLk9TAZVL6mkIbg&s",
  },
  {
    id: 2,
    title: {
      eng: "Tech Innovation on the Rise",
      am: "የቴክ አዳዲስ ፀጋዎች እየገነቡ ነው",
    },
    description: {
      eng: "New advancements in AI and blockchain are rapidly changing the technological landscape",
      am: "በአርቲፊሻል ኢንተሊጀንስና በብሎክቺን አዳዲስ ልማቶች ሙያዊ ቅርፅን እየተለወጡ ናቸው",
    },
    postedDate: "2024-09-12",
    imageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/63ecfcb9483363bcf4afaae6/We-ll-crack-through-this-code-tonight/960x0.jpg?height=473&width=711&fit=bounds",
  },
  {
    id: 3,
    title: {
      eng: "Advertising Trends of 2024",
      am: "የ2024 ዓ.ም የማስታወቂያ ዘዴዎች",
    },
    description: {
      eng: "In 2024, advertising strategies are shifting towards more personalized and interactive content",
      am: "በ2024 ዓ.ም ስሜታዊ እና አቀራረቢ ይህ ዘዴዎች እየተቀየሩ ናቸው",
    },
    postedDate: "2024-09-13",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D12AQHhNouG8mf6Eg/article-cover_image-shrink_720_1280/0/1706761007886?e=2147483647&v=beta&t=P8ov-Mv3u6U0E82EcPGXe60WOfVu1OKyeBZ-ZRA6bIA",
  },
  {
    id: 4,
    title: {
      eng: "Global Economic Update",
      am: "የዓለም አቀፍ ኢኮኖሚክ ዜና",
    },
    description: {
      eng: "The global economy is witnessing a major transition as new financial policies come into play",
      am: "ዓለም አቀፍ ኢኮኖሚ አስፈላጊ ለውጦችን እየተመለከተች በመሆኗ የሚጠቀምበት የተመለከተ ቁልፍ",
    },
    postedDate: "2024-09-14",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAOrjzxGglXGG8PN389cS6v--aHQIwxv-2A&s",
  },
  {
    id: 5,
    title: {
      eng: "Sustainability in Business",
      am: "በንግድ ላይ ጽኑነት እና ጥቅም ማዘዝ",
    },
    description: {
      eng: "Businesses are increasingly focused on sustainability, with new policies being introduced",
      am: "ንግድ እንደጽኑነት እና የተቀመጡ አዳዲስ ፖሊሲዎች የተመሰረቱ ናቸው",
    },
    postedDate: "2024-09-15",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtSx4qrHZZoTtEM3bj_Nun0buY2xH5ttdFQ&s",
  },
];

const News = () => {
  const language = useSelector((state: any) => state.language.language);
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  // Helper function to truncate text
  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <Container className="mt-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 lg:text-4xl dark:text-white">
          {language === "eng" ? "Latest News" : "አዳዲስ ዜናዎች"}
        </h1>
        <p className="mt-4 text-md text-gray-500 xl:text-lg dark:text-gray-300">
          {language === "eng"
            ? "Stay updated with the latest news and trends in advertising."
            : "በማስታወቂያ ስርዓት ላይ የቅርብ ጊዜ ዜናዎችንና ወቅታዊነትን ተከታተሉ።"}
        </p>
      </div>
      {/* News Articles Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transform transition-transform sm:hover:scale-105 hover:shadow-lg"
          >
            <img
              src={news.imageUrl}
              alt={news.title.eng}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {language === "eng" ? news.title.eng : news.title.am}
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              {news.postedDate}
            </p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              {expandedNews === news.id
                ? language === "eng"
                  ? news.description.eng
                  : news.description.am
                : truncateText(
                    language === "eng"
                      ? news.description.eng
                      : news.description.am,
                    language === "eng" ? 60 : 40 // Adjusted truncation length for Amharic
                  )}
            </p>
            <button
              className="mt-4 text-blue-500 hover:underline text-sm"
              onClick={() => toggleExpand(news.id)}
            >
              {expandedNews === news.id
                ? language === "eng"
                  ? "See Less"
                  : "ተመለስ"
                : language === "eng"
                ? "See More"
                : "ተጨማሪ እይ"}
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default News;
