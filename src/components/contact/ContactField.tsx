interface ContactFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: string;
    required?: boolean;
  }
  
  export function ContactField({
    label,
    name,
    value,
    onChange,
    type = "text",
    error,
    required,
  }: ContactFieldProps) {
    return (
      <div>
        <label
          htmlFor={name}
          className="text-eyebrow text-ink-muted"
        >
          {label}
          {required && " *"}
        </label>
  
        <input
          id={name}
          type={type}
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-ink focus:border-accent focus:outline-none"
        />
  
        {error && (
          <p className="mt-1 text-xs text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }