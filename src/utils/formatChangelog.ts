export interface NotionDatabaseQueryResponse {
  object: string;
  results: Result[];
  next_cursor: null;
  has_more: boolean;
  type: string;
}
export interface Result {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  cover: null;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}
export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  completedDate: CompletedDate;
  version: Status;
  status: Status;
  commitUrl: CommitURL;
  feature: Feature;
}

export interface CommitURL {
  id: string;
  type: string;
  url: null | string;
}

export interface CompletedDate {
  id: string;
  type: string;
  date: DateClass | null;
}

export interface DateClass {
  start: Date;
  end: null;
  time_zone: null;
}

export interface Feature {
  id: string;
  type: string;
  title: Title[];
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href: null;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link: null;
}

export interface Status {
  id: ID;
  type: Type;
  select: Select;
}

export enum ID {
  Rj60T = "RJ%60T",
  The60DXr = "%60dXr",
}

export interface Select {
  id: string;
  name: string;
  color: string;
}

export enum Type {
  Select = "select",
}

export type FormattedFeature = {
  featureName: string;
  featureDate: Date | null;
  commit: string | null;
};

export type FormattedChangeLog = Record<string, FormattedFeature[]>;

export const formatChangelog = (data: NotionDatabaseQueryResponse) => {
  const formattedChangelog: FormattedChangeLog = {};

  for (const notionTableRow of data.results) {
    const {version, feature, completedDate, commitUrl} =
      notionTableRow.properties;

    const versionName = version.select.name;
    const featureName = feature.title[0].plain_text;
    const featureDate = completedDate.date?.start ?? null;
    const commit = commitUrl.url;

    if (formattedChangelog[versionName as keyof typeof formattedChangelog]) {
      formattedChangelog[versionName as keyof typeof formattedChangelog].push({
        featureName,
        featureDate,
        commit,
      });
    } else {
      formattedChangelog[versionName as keyof typeof formattedChangelog] = [
        {
          featureName,
          featureDate,
          commit,
        },
      ];
    }
  }
  return formattedChangelog;
};
