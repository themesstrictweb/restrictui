import { Avatar, AvatarFallback, AvatarImage } from '@/registry/default/ui/avatar';

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="/media/avatars/14.png" alt="@restrictui" />
      <AvatarFallback>CH</AvatarFallback>
    </Avatar>
  );
}
