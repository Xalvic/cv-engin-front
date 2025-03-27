import { Link } from 'react-router-dom';
import { Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
          <CardDescription>Sign in with your social account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <Button variant="outline" asChild className="w-full h-12">
              <Link to="http://cv-engine.vercel.app/auth/social/github/redirect" className="flex items-center justify-center">
                <Github className="mr-2 h-5 w-5" />
                Continue with GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full h-12">
              <Link to="http://cv-engine.vercel.app/auth/social/google/redirect" className="flex items-center justify-center">
                <svg
                  className="mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 22q-2.05 0-3.875-.788t-3.188-2.15-2.137-3.175T2 12q0-2.075.788-3.887t2.15-3.175 3.175-2.138T12 2q2.075 0 3.887.788t3.175 2.15 2.138 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188-3.175 2.137T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8q0 .825.588 1.413T14 14q.825 0 1.413-.588T16 12q0-.825-.588-1.413T14 10q-.825 0-1.413.588T12 12Zm-4 0q0 .825.588 1.413T10 14q.825 0 1.413-.588T12 12q0-.825-.588-1.413T10 10q-.825 0-1.413.588T8 12Zm8 0q0 .825.588 1.413T18 14q.825 0 1.413-.588T20 12q0-.825-.588-1.413T18 10q-.825 0-1.413.588T16 12Z" />
                </svg>
                Continue with Google
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full h-12">
              <Link to="http://cv-engine.vercel.app/auth/social/linkedin/redirect" className="flex items-center justify-center">
                <Linkedin className="mr-2 h-5 w-5" />
                Continue with LinkedIn
              </Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

