import { Button } from "@/components/ui/button"

interface StartScreenProps {
  onStart: () => void
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Elena&apos;s twentysexies Birthday Quiz!</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Get ready for a fun journey through our memories! Answer questions about our relationship and favorite moments. With each correct answer, you&apos;ll unlock a special photo. At the end, a big surprise awaits you!
      </p>
      <Button onClick={onStart} className="text-lg px-8 py-4">
        Start the Quiz
      </Button>
    </div>
  )
}

