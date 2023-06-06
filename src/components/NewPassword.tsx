type NewPasswordProps = {
  clickPassword: () => void,
  buttonName: string
};

export function NewPassword({ clickPassword, buttonName }:NewPasswordProps) {
  return (
    <button onClick={ clickPassword }>
      {buttonName}
    </button>
  );
}
