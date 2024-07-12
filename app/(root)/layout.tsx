import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";

// import prismadb from '@/lib/prismadb';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();
  console.log("userId", userId);
  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements
  console.log("Current user", user);
  if (!userId) {
    redirect("/sign-in");
  }

  // const store = await prismadb.store.findFirst({
  //   where: {
  //     userId,
  //   }
  // });

  // if (userId) {
  //   redirect(`/${userId}`);
  // };

  return <>{children}</>;
}
