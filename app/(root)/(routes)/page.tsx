// "use client";

// import { useEffect } from "react";

// import { useStoreModal } from "@/hooks/use-store-modal";

// const SetupPage = () => {
//   const onOpen = useStoreModal((state) => state.onOpen);
//   const isOpen = useStoreModal((state) => state.isOpen);

//   useEffect(() => {
//     if (!isOpen) {
//       onOpen();
//     }
//   }, [isOpen, onOpen]);

//   return null;
// };
 
// export default SetupPage;
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Button>Click me</Button>
    </main>
  );
}

