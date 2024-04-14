import { UserCard } from "@/components/userCard";
import { fetchAllUsers } from "../api/users";

import util from "@/styles/util.module.css";

export async function getStaticProps() {
  const users = await fetchAllUsers();

  return {
    props: {
      users,
    },
  };
}

export default function Users({ users }) {
  const user = users[0];

  return (
    <>
      <div className={util.user_card_list}>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
}
