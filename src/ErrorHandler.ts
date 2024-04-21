function handleSMSError(errorCode: number) {
  switch (errorCode) {
    case 1002:
      return "Sender ID/Masking Not Found";
    case 1003:
      return "API Not Found";
    case 1004:
      return "SPAM Detected";
    case 1005:
    case 1006:
      return "Internal Error";
    case 1007:
      return "Balance Insufficient";
    case 1008:
      return "Message is empty";
    case 1009:
      return "Message Type Not Set";
    case 1010:
      return "Invalid User & Password";
    case 1011:
      return "Invalid User Id";
    case 1012:
      return "Invalid Number";
    case 1013:
      return "API limit error";
    case 1014:
      return "No matching template";
    case 1015:
      return "SMS Content Validation Fail";
    default:
      return "Unknown Error";
  }
}
export default handleSMSError;
