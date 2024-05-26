import Image from "next/image";
import StatusUpdater from "@/components/StatusUpdater";
import StatusContainer from "@/components/StatusContainer";

export default function Feed() {

  const favors = [
    {
      favor_id: 1,
      title: "Help with Gardening",
      payment: "30",
      description: "Looking for someone to help weed and plant flowers in a small garden.",
      posted: "April 15, 2024",
      first_name: "Alice",
      last_name: "Johnson"
    },
    {
      favor_id: 2,
      title: "Moving Assistance",
      payment: "100",
      description: "Need help moving a few large items to a new apartment. Truck required.",
      posted: "April 18, 2024",
      first_name: "Bob",
      last_name: "Smith"
    },
    {
      favor_id: 3,
      title: "Pet Sitting",
      payment: "50",
      description: "Looking for someone to care for my two cats over the weekend.",
      posted: "April 20, 2024",
      first_name: "Carol",
      last_name: "Martinez"
    },
    {
      favor_id: 4,
      title: "Tutoring for Math",
      payment: "25",
      description: "Need a tutor for high school algebra. Prefer sessions in the evening.",
      posted: "April 22, 2024",
      first_instance: "Dave",
      last_name: "Lee"
    },
    {
      favor_id: 5,
      title: "Grocery Shopping Help",
      payment: "15",
      description: "Need someone to help pick up groceries. List will be provided upon acceptance.",
      posted: "April 23, 2024",
      first_name: "Elena",
      last_name: "Yates"
    },
    {
      favor_id: 6,
      title: "Car Wash",
      payment: "20",
      description: "Looking for someone to wash my sedan this weekend. Supplies provided.",
      posted: "April 25, 2024",
      first_name: "Frank",
      last_name: "Gibson"
    },
    {
      favor_id: 7,
      title: "Document Editing",
      payment: "45",
      description: "Need a detailed review and editing of my resume and cover letter.",
      posted: "April 27, 2024",
      first_name: "Grace",
      last_name: "Harper"
    }
    
  ];

  return (
    <>
      <StatusUpdater />

      {favors.map((favor) => (
        <StatusContainer
          title={favor.title}
          payment={favor.payment}
          description={favor.description}
          posted={favor.posted}
          first_name={favor.first_name}
          last_name={favor.last_name}
          key={favor.favor_id}
        />
      ))}
    </>
  )
}