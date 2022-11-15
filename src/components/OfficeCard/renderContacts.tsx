import type { ContactInformation } from './OfficeCardContent';

export function renderContacts(contact: ContactInformation, i: number) {
  return (
    <div key={String(i)} className="flex gap-1 flex-col h-full max-w-[490px]">
      {contact?.title ? (
        <div className="font-normal text-sm text-secondary-text">{contact.title}</div>
      ) : null}
      {contact?.info ? (
        <div className="font-medium text-base text-primary-text ">{contact.info}</div>
      ) : null}
    </div>
  );
}
