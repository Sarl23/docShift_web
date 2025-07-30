import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Settings } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useEffect, useState } from 'react'
import { getUsers } from '@/lib/api/user'
import { User } from '@/lib/api/user'
import Calendar03 from '@/components/calendar-03'

export default function ManagementPage() {
  const [users, setUsers] = useState<User[] | null>(null)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const fetchedUsers = await getUsers('XkoILa79OBMKs9QAp1qh')
        setUsers(fetchedUsers)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }
    fetchUsers()
  }, [])

  const handleAssignShifts = (user: User) => {
    console.log('User:', user)
    setSelectedUser(user)
    // Implement the logic for assigning shifts here
  }

  return (
    <div className="bg-background p-12">
      <h1 className="text-3xl font-bold mb-8">Asignacion de turnos</h1>
      <div className="flex items-start justify-between gap-8">
        <div className="flex flex-col space-y-4">
          {users?.map((user, index) => (
            <Card
              key={index}
              className={`w-80 h-[7rem] cursor-pointer transition-all ${
                selectedUser?.userId === user.userId
                  ? 'border-2 border-blue-500 bg-blue-100'
                  : 'hover:border-2 hover:border-blue-300'
              }`}
              onClick={() => handleAssignShifts(user)}
            >
              <CardContent>
                <div className="flex items-center gap-2.5">
                  <img
                    src="/src/assets/sarl-sticker.png"
                    alt="Doctor"
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="ml-2">
                    <Badge variant="secondary">{user.status}</Badge>
                    <div>{user.name}</div>
                    <div>{user.rol ?? ''}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator orientation="vertical" />
        <div className="flex items-start space-x-4">
          <Card>
            <CardHeader>
              <CardTitle>Sergio Rojas</CardTitle>
              <CardDescription>Esp. Neurologo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between gap-2.5">
                <img
                  src="/src/assets/sarl-sticker.png"
                  alt="Doctor"
                  className="w-48 h-48 rounded-full"
                />
                <div>
                  <Badge variant="secondary">Badge</Badge>
                  <div>Sergio Rojas</div>
                  <div>Dr. Esp. Neurologo</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center p-2 bg-gray-100 rounded-lg justify-between mb-2">
                  <div className="flex items-stretch  gap-2.5">
                    <Settings className="w-5 h-5" />
                    <p className="text-sm">Correo</p>
                  </div>
                  <p className="text-sm">emailsergiorojas@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col space-y-4 w-full">
            <Card>
              <CardContent>
                <div>
                  <h2 className="text-lg font-semibold">Turnos disponibles</h2>
                  <ul className="list-disc pl-5">
                    <li>Turno 1: 10:00 AM - 11:00 AM</li>
                    <li>Turno 2: 11:30 AM - 12:30 PM</li>
                    <li>Turno 3: 1:00 PM - 2:00 PM</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div>
                  <h2 className="text-lg font-semibold">Calendario</h2>
                  <Calendar03 />
                </div>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
