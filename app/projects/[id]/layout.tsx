import { Id } from "@/convex/_generated/dataModel"
import { ProjectIdLayout } from "@/features/projects/components/project-id-layout"

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    id: Id<'projects'>
  }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const {id} = await params

  return(
    <ProjectIdLayout id={id}>
      {children}
    </ProjectIdLayout>
  )
}