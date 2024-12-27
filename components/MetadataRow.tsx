interface MetadataRowProps {
  totalQuestions: number
  answeredQuestions: number
}

export default function MetadataRow({ totalQuestions, answeredQuestions }: MetadataRowProps) {
  return (
    <div className="grid grid-cols-4 gap-4 px-4 text-sm font-mono">
      <div>
        Questions remaining:
        <br />
        {totalQuestions - answeredQuestions}
      </div>
      <div>
        Questions completed:
        <br />
        {answeredQuestions}
      </div>
      <div>
        Total questions:
        <br />
        {totalQuestions}
      </div>
      <div>
        Progress:
        <br />
        {Math.round((answeredQuestions / totalQuestions) * 100)}%
      </div>
    </div>
  )
}

