type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionURL: string | number;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

// interface FileData {
//   path: string;
//   content: string;
// }

// interface DatabaseData {
//   connectionURL: string | number;
//   credentials: string;
// }

// interface Status {
//   isOpen: boolean;
//   errorMessage?: string;
// }

// interface AccessedFileData extends FileData, Status {}
// interface AccessedDatabaseData extends DatabaseData, Status {}
