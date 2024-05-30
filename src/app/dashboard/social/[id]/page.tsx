'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScheduleView from '@/app/dashboard/schedule/components/ScheduleView';
import useCourseData from '../../schedule/hooks/useCourseData';
import useOtherUserData from '../../schedule/hooks/useOtherUserData';
import Statistics from '../../schedule/Statistics';
import { Separator } from '@/components/ui/separator';
import { SkeletonCard } from '@/app/components/SkeletonComponent';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

type Props = {
  params: {
    id: string;
  };
};

export default function OtherUserSchedule({ params }: Props) {
  const { id } = params;
  const {
    courses,
    semesters,
    semestersP2,
    loading: coursesLoading,
  } = useCourseData(id);
  const { user, loading: userLoading, error: userError } = useOtherUserData(id);
  const defaultUser = user || {
    name: '',
    image: '',
    program: '',
    colorScheme: '',
    email: '',
    isPublic: true,
    id: '',
  };

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Hem</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/social">Användare</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{user?.name || 'Profil'}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-8">
        <Statistics
          loading={coursesLoading}
          courses={courses}
          user={defaultUser}
        />

        <Separator />

        <Tabs defaultValue="schedule" className="flex flex-col gap-4">
          <TabsList className="flex gap-2 w-min">
            <TabsTrigger value="schedule">Schema</TabsTrigger>
            <TabsTrigger value="reviews">Recension</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <ScheduleView
              semesters={semesters}
              semestersP2={semestersP2}
              loading={coursesLoading}
              draggable={false}
            />
          </TabsContent>

          <TabsContent value="reviews">
            <div>
              <h5>Recension</h5>
              <p>Recensioner kommer snart!</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
