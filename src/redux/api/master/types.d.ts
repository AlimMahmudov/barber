namespace MASTER {
  type GetResponse = MasterType[];
  type GetRequest = void;
}

namespace SHAVE {
  type GetResponse = ShaveType[];
  type GetRequest = void;
}

namespace WATCH {
  type GetResponse = WatchType[];
  type GetRequest = void;
}

namespace SERVICE {
  type GetResponse = ServiceType[];
  type GetRequest = void;
}

namespace VIDEO {
  type GetVideoRes = [
    {
      id: number;
      youtube: string;
    }
  ];

  type GetVideoReq = void;
}
