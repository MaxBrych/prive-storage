import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadFiles from "./uploadFiles/UploadFile";
import UploadFilesEncrypted from "./uploadFiles/UploadFileEncrypted";

export function UploadTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Public</TabsTrigger>
        <TabsTrigger value="password">Private</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Sharable</CardTitle>
            <CardDescription>
              Everyone can see and access this file.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <UploadFiles />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Encrypted Upload</CardTitle>
            <CardDescription>
              Only you can see and access this file.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <UploadFilesEncrypted />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
