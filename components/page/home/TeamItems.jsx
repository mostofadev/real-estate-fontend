import TeamCard from "@/components/ui/card/TeamCard";
import TeamImg1 from "../../../public/team/t1.png";
import TeamImg2 from "../../../public/team/t2.png";
import TeamImg3 from "../../../public/team/t3.png";
import TeamImg4 from "../../../public/team/t4.png";
import MarginSection from "@/components/section/MarginSection";

const teamMembers = [
  { id: 1, img: TeamImg1, name: "Milani Mou", position: "Business Agent" },
  { id: 2, img: TeamImg2, name: "John Doe", position: "Marketing Expert" },
  { id: 3, img: TeamImg3, name: "Jane Smith", position: "Developer" },
  { id: 4, img: TeamImg4, name: "Alex Ray", position: "Designer" },
];

export default function TeamItems() {
  return (
    <MarginSection>
      <>
        <div className="mt-20">
          <h2 className="text-5xl font-bold my-10 text-center">Our Agents</h2>
          <div className="flex flex-wrap ">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                imgSrc={member.img}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </div>
      </>
    </MarginSection>
  );
}
