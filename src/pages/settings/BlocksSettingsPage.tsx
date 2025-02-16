import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import AppContent from "../../features/shared/AppContent";
import {
  TitleContainer,
  UsernameIonText,
} from "../../features/comment/compose/reply/CommentReply";
import { useAppSelector } from "../../store";
import {
  handleSelector,
  localUserSelector,
} from "../../features/auth/authSlice";
import FilterNsfw from "../../features/settings/blocks/FilterNsfw";
import BlockedCommunities from "../../features/settings/blocks/BlockedCommunities";
import { CenteredSpinner } from "../posts/PostPage";
import BlockedUsers from "../../features/settings/blocks/BlockedUsers";
import FilteredKeywords from "../../features/settings/blocks/FilteredKeywords";

export default function BlocksSettingsPage() {
  const userHandle = useAppSelector(handleSelector);
  const localUser = useAppSelector(localUserSelector);

  return (
    <IonPage className="grey-bg">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" text="Settings" />
          </IonButtons>

          <IonTitle>
            <TitleContainer>
              <IonText>Filters & Blocks</IonText>
              <div>
                <UsernameIonText color="medium">{userHandle}</UsernameIonText>
              </div>
            </TitleContainer>{" "}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      {localUser ? (
        <AppContent scrollY>
          <FilterNsfw />
          <FilteredKeywords />
          <BlockedCommunities />
          <BlockedUsers />
        </AppContent>
      ) : (
        <IonContent scrollY={false}>
          <CenteredSpinner />
        </IonContent>
      )}
    </IonPage>
  );
}
