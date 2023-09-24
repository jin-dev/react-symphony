interface FilteredItems {
    subject: string;
    key: string;
    count: number;
    size: string;
    expires_at: string;
    recipients: number;
  }
  interface JsonData {
    sent: {
      subject: string;
      emails?: string[];
    };
    key: string;
    count: number;
    size: number;
    expires_at: number;
  }

  interface TableObject {
    count: number
    expires_at: string
    key: string
    size: string
    subject: string
    recipients : number
  }

interface Sent {
    subject: string;
    content: string;
    emails: string[];
}

interface DataItem {
    created_at: number;
    key: string;
    expires_at: number;
    download_count: number;
    count: number;
    size: number;
    summary: string;
    thumbnailUrl: string;
    files: [];
    sent: Sent;
}

interface FileItem {
    name: string;
    size: number;
    thumbnailUrl: string;
  }
  
  export { FilteredItems, JsonData, TableObject, DataItem, FileItem };