import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {CheckboxDisabled} from "@/components/checkboxDisabled"

export function CardSmall() {
  return (
    <Card size="sm" className="w-full max-w-lg transition-transform hover:scale-105 cursor-pointer">

      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>
          Deadline : 30.08.2010
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p>
          The card component supports a size prop that can be set to
          &quot;sm&quot; for a more compact appearance.
        </p>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="w-2/3">
          Action
        </Button>
        <CheckboxDisabled />
      </CardFooter>

    </Card>
  )
}
