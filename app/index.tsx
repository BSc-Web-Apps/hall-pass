import * as React from "react";
import { View } from "react-native";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-background">
      <Card className="w-full max-w-sm p-6 rounded-2xl">
        <CardHeader className="items-center">
          <CardTitle className="pb-2 text-center">
            This is a card title
          </CardTitle>
        </CardHeader>

        <CardContent>
          <View className="flex-row justify-center gap-3">
            <View className="items-center">
              <Text className="text-sm text-muted-foreground">
                This is some
              </Text>
              <Text className="text-xl font-semibold">Card Content</Text>
            </View>
          </View>
        </CardContent>

        <CardFooter className="flex-col gap-3 pb-0">
          <View className="flex-row items-center overflow-hidden">
            <Text>This is the card footer</Text>
          </View>
        </CardFooter>
      </Card>
    </View>
  );
}
