import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

//

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 '
      )}
    >
      {children}
    </div>
  );
}

TextInputIcon.displayName = 'TextInput.Root';

//

export interface TextInputIConProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIConProps) {
  return <Slot className="w-6 h-6 text-gray-600">{children}</Slot>;
}

TextInputIcon.displayName = 'TextInput.Icon';

//

export interface TextInputInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 "
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

//

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};
