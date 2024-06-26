'use client';

import { useCallback, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { User } from '@/app/utilities/types';
import UserCard from './components/UserCard';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const fetchData = useCallback(async () => {
    if (searchQuery.length > 0) {
      // Check if the search query is not empty
      setLoading(true);
      try {
        const response = await fetch(
          `/api/users?query=${encodeURIComponent(searchQuery)}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    }
  }, [searchQuery]);

  useEffect(() => {
    const handle = setTimeout(() => {
      fetchData().catch(console.error);
    }, 500); // Add a debounce time to reduce number of requests

    return () => clearTimeout(handle);
  }, [fetchData]);

  const filteredUsers = users.filter((user) =>
    [user.name.toLowerCase(), user.email.toLowerCase()].some((value) =>
      value.includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col gap-8 w-full">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Hem</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Användare</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Sök användare..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <p>
          Visar <b>{filteredUsers.length}</b> resultat
        </p>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : filteredUsers.length > 0 ? (
        <div className="bg-card shadow-2xl h-full w-full flex flex-col gap-2 p-6 rounded-md">
          {filteredUsers.map((user) => (
            <div key={user.id}>
              <UserCard user={user} />
              <Separator />
            </div>
          ))}
        </div>
      ) : (
        <p>Ingen användare kunde hittas.</p>
      )}
    </div>
  );
};

export default UsersPage;
