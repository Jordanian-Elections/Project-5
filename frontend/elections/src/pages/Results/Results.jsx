import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ResultsPage = () => {
  const [electionEnded, setElectionEnded] = useState(true);
  const [localListsExpanded, setLocalListsExpanded] = useState(true);
  const [partyListsExpanded, setPartyListsExpanded] = useState(true);

  // Mock data - replace with actual API calls
  const electionEndDate = new Date("2024-08-14");
  const localLists = [
    {
      id: 1,
      name: "القائمة المحلية أ",
      candidates: ["مرشح 1", "مرشح 2", "مرشح 3"],
    },
    {
      id: 2,
      name: "القائمة المحلية ب",
      candidates: ["مرشح 4", "مرشح 5", "مرشح 6"],
    },
  ];
  const partyLists = [
    { id: 1, name: "حزب التقدم", candidates: ["مرشح 7", "مرشح 8", "مرشح 9"] },
    {
      id: 2,
      name: "حزب المستقبل",
      candidates: ["مرشح 10", "مرشح 11", "مرشح 12"],
    },
  ];

  useEffect(() => {
    const checkElectionStatus = () => {
      const now = new Date();
      setElectionEnded(now > electionEndDate);
    };

    checkElectionStatus();
    const timer = setInterval(checkElectionStatus, 60000); // Check every minute

    return () => clearInterval(timer);
  }, []);

  if (!electionEnded) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            نتائج الانتخابات
          </h1>
          <p className="text-xl text-gray-600">
            سيتم عرض النتائج بعد انتهاء الانتخابات في{" "}
            {electionEndDate.toLocaleDateString("ar-JO")}
          </p>
          <p className="text-lg text-gray-500 mt-4">
            نقدر صبركم ونتطلع إلى مشاركتكم في هذه اللحظات المهمة من العملية
            الانتخابية. نؤكد لكم أننا سنعمل على تقديم النتائج بأعلى درجات الدقة
            والشفافية.
          </p>
        </div>
      </div>
    );
  }

  const ExpandableSection = ({ title, items, expanded, setExpanded }) => (
    <div className="mb-8">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center bg-[#01332A] text-white p-4 rounded-t-lg focus:outline-none"
      >
        <h2 className="text-xl font-bold">{title}</h2>
        {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {expanded && (
        <div className="bg-white p-4 rounded-b-lg shadow-md">
          {items.map((item) => (
            <div key={item.id} className="mb-4 last:mb-0">
              <h3 className="text-lg font-semibold text-[#01332A] mb-2">
                {item.name}
              </h3>
              <ul className="list-disc list-inside">
                {item.candidates.map((candidate, index) => (
                  <li key={index} className="text-gray-700">
                    {candidate}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#01332A] mb-8">
          نتائج الانتخابات الأردنية
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          نشكركم على مشاركتكم الفعالة في العملية الانتخابية. نحن ملتزمون بتقديم
          نتائج دقيقة وشفافة تعكس إرادة الشعب الأردني. أدناه تجدون تفاصيل
          القوائم المحلية وقوائم الأحزاب التي حصلت على أعلى الأصوات في
          الانتخابات.
        </p>

        <ExpandableSection
          title="القوائم المحلية الفائزة"
          items={localLists}
          expanded={localListsExpanded}
          setExpanded={setLocalListsExpanded}
        />

        <ExpandableSection
          title="قوائم الأحزاب الفائزة"
          items={partyLists}
          expanded={partyListsExpanded}
          setExpanded={setPartyListsExpanded}
        />
      </div>
    </div>
  );
};

export default ResultsPage;
