export type State<type> = [type, React.Dispatch<type>]

export interface States {
  string: State<string>
  boolean: State<boolean>
}