import { UserCircleIcon } from "lucide-react";
 import { Doc } from "../../convex/_generated/dataModel";
 import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


type User = Doc<"users">
function UserInfo({user}:{user:User}) {
  return (
    <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
            <AvatarImage src={user.image} />
                <AvatarFallback>
                    <UserCircleIcon className="h-4 w-4"/>
                </AvatarFallback>
        </Avatar>
    </div>
  )
}

export default UserInfo