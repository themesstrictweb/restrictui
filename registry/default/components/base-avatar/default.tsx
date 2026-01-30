import { Avatar, AvatarFallback, AvatarImage } from '@/registry/default/ui/base-avatar';

export default function Component() {
  return (
    <Avatar>
      <AvatarImage src="/media/avatars/14.png" alt="@restrictui" />
      <AvatarFallback>CH</AvatarFallback>
    </Avatar>
  );
}
