import util from "@/styles/util.module.css";

export function UserCard({ user }) {
  return (
    <div className={util.user_card}>
      <img
        src="https://source.unsplash.com/random"
        alt="ユーザー"
        className={util.user_icon}
      />
      <p className={util.text_bold}>{user.username}</p>
      <p className={util.text_min}>{user.name}</p>
    </div>
  );
}
