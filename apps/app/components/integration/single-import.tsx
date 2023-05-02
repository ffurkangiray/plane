// ui
import { CustomMenu } from "components/ui";
// icons
import { TrashIcon } from "@heroicons/react/24/outline";
// helpers
import { renderShortDateWithYearFormat } from "helpers/date-time.helper";
// types
import { IImporterService } from "types";

type Props = {
  service: IImporterService;
  refreshing: boolean;
  handleDelete: () => void;
};

const importersList: { [key: string]: string } = {
  github: "GitHub",
};

export const SingleImport: React.FC<Props> = ({ service, refreshing, handleDelete }) => (
  <div className="flex items-center justify-between gap-2 py-3">
    <div>
      <h4 className="flex items-center gap-2 text-sm">
        <span>
          Import from <span className="font-medium">{importersList[service.service]}</span> to{" "}
          <span className="font-medium">{service.project_detail.name}</span>
        </span>
        <span
          className={`rounded px-2 py-0.5 text-xs capitalize ${
            service.status === "completed"
              ? "bg-green-500/20 text-green-500"
              : service.status === "processing"
              ? "bg-yellow-500/20 text-yellow-500"
              : service.status === "failed"
              ? "bg-red-500/20 text-red-500"
              : ""
          }`}
        >
          {refreshing ? "Refreshing..." : service.status}
        </span>
      </h4>
      <div className="mt-2 flex items-center gap-2 text-xs text-brand-secondary">
        <span>{renderShortDateWithYearFormat(service.created_at)}</span>|
        <span>
          Imported by{" "}
          {service.initiated_by_detail.first_name && service.initiated_by_detail.first_name !== ""
            ? service.initiated_by_detail.first_name + " " + service.initiated_by_detail.last_name
            : service.initiated_by_detail.email}
        </span>
      </div>
    </div>
    <CustomMenu ellipsis>
      <CustomMenu.MenuItem onClick={handleDelete}>
        <span className="flex items-center justify-start gap-2">
          <TrashIcon className="h-3.5 w-3.5" />
          Delete import
        </span>
      </CustomMenu.MenuItem>
    </CustomMenu>
  </div>
);